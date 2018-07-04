(require 'bytecomp)

(defcustom use-package-verbose nil
  "Whether to report about loading and configuration details.
then the expanded macros do their job silently."
  :type '(choice (const :tag "Quiet, without catching errors" errors)
                 (const :tag "Quiet" nil)
                 (const :tag "Verbose" t)
                 (const :tag "Debug" debug))
  :group 'use-package)

(defun use-package-normalize-regex (re)
  "Given some regexp-like thing in RE, resolve to a regular expression."
  (cond
   ((and (listp re) (eq (car re) 'rx)) (eval re))
   ((stringp re) re)
   (t (error "Not recognized as regular expression: %s" re))))

(defcustom use-package-form-regexp-eval
  `(concat ,(eval-when-compile
              (concat "^\\s-*("
                      (regexp-opt '("use-package" "require") t)
                      "\\s-+\\("))
           (or (bound-and-true-p lisp-mode-symbol-regexp)
               "\\(?:\\sw\\|\\s_\\|\\\\.\\)+") "\\)")
  "Sexp providing regexp for finding use-package forms in user files.
This is used by `use-package-jump-to-package-form' and
`use-package-enable-imenu-support'."
  :type 'sexp
  :group 'use-packag

/** 登录与校验相关中文文案（原 zh.json）。 */
export const AUTH_COPY = {
  companyCode: {
    label: "公司编码",
    placeholder: "请输入公司编码",
    required: "公司编码不能为空",
  },
  userName: {
    label: "账号",
    placeholder: "请输入账号",
    required: "用户名不能为空",
  },
  password: {
    label: "密码",
    placeholder: "请输入密码",
    required: "密码不能为空",
    rules: "密码格式不正确",
    invalid: "密码需包含大小写字母和数字，且长度不少于 8 位",
  },
  captcha: {
    label: "图形验证码",
    placeholder: "输入上方验证码",
    imageAlt: "图形验证码",
    refresh: "刷新验证码",
    required: "请输入图形验证码",
  },
  login: {
    title: "欢迎登录",
    rememberMe: "记住我",
    submit: "登录",
    failed: "登录失败",
  },
  validationError: "验证失败",
  departmentManagerUpdated: "部门负责人已更新",
} as const;

const KEY_TABLE: Record<string, string> = {
  "validation.error": AUTH_COPY.validationError,
  "auth.companyCode.required": AUTH_COPY.companyCode.required,
  "auth.userName.required": AUTH_COPY.userName.required,
  "auth.password.required": AUTH_COPY.password.required,
  "auth.password.rules": AUTH_COPY.password.rules,
  "auth.password.invalid": AUTH_COPY.password.invalid,
  "auth.captcha.required": AUTH_COPY.captcha.required,
  "auth.login.failed": AUTH_COPY.login.failed,
  "department.manager_updated": AUTH_COPY.departmentManagerUpdated,
};

/**
 * 将 Zod / 内部 message 键解析为中文；未知键原样返回。
 * @param key — 文案键或已是可读字符串
 */
export function resolveAuthMessage(key: string): string {
  return KEY_TABLE[key] ?? key;
}

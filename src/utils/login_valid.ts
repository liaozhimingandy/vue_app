import { ref } from "vue";

export const user = ref({
  user_id: "",
  password: "",
});

// 校验规则
export const rules = ref({
  user_id: [
    {
      message: "登录账号不能为空...",
      required: true,
      trigger: "blur",
    },{
      min: 3,
      max: 5,
      message: "用户名理论上不能少于3位数",
      trigger: "blur",
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码长度必须6到30位之间...",
      trigger: "blur",
    }
  ],
});
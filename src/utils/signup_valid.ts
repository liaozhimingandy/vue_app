import { ref } from "vue";

export const signup_user = ref({
  user_id: "",
  password: "",
  password2: ""
});

// 校验规则
export const signup_rules = ref({
  user_id: [
    {
      type: "email",
      message: "Email is incorrect...",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Password could not be empty...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "Password's length has to be 6 to 30 characters...",
      trigger: "blur",
    },
  ],
    password2: [
    {
      required: true,
      message: "Password could not be empty...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "Password's length has to be 6 to 30 characters...",
      trigger: "blur",
    },
  ],
});
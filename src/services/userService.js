import API from "../api/axios";

// ✅ ดึงข้อมูลผู้ใช้ที่ล็อกอินอยู่
export const getMe = async () => {
  const token = localStorage.getItem("token");
  return API.get("/users/me", {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};

// ✅ สมัครสมาชิก
export const register = async (userData) => {
  return API.post("/users/register", userData);
};

// ✅ ล็อกอิน
export const login = async (credentials) => {
  const response = await API.post("/users/login", credentials);
  console.log("response", response)
  localStorage.setItem("token", response.data.token); // เก็บ Token
  return response.data;
};

// ✅ อัปเดตข้อมูลผู้ใช้
export const updateUser = async (userData) => {
  const token = localStorage.getItem("token");
  return API.put("/users/me", userData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// ✅ ออกจากระบบ
export const logout = () => {
  localStorage.removeItem("token");
};

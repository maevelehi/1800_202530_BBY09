import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";

// -------------------------------------------------------------
// Function to populate user info in the profile form
// -------------------------------------------------------------
function populateUserInfo() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          const {
            name = "",
            school = "",
            group = "",
            avatarUrl = "",
          } = userData;

          // 设置表单值
          document.getElementById("nameInput").value = name;
          document.getElementById("schoolInput").value = school;
          document.getElementById("groupInput").value = group;

          // 设置头像（如果有）
          if (avatarUrl) {
            document.getElementById("avatar").src = avatarUrl;
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting user document:", error);
      }
    } else {
      console.log("No user is signed in");
    }
  });
}

//-------------------------------------------------------------
// Function to enable editing of user info form fields
//-------------------------------------------------------------
function editUserInfo() {
  document.getElementById("personalInfoFields").disabled = false;
  // 更改按钮文本
  document.getElementById("editProfileBtn").textContent = "Save Profile";
}

//-------------------------------------------------------------
// Updates the user document in Firestore with new values
//-------------------------------------------------------------
async function updateUserDocument(uid, name, school, group, avatarUrl) {
  try {
    const userRef = doc(db, "users", uid);
    // 更新用户数据
    await updateDoc(userRef, {
      name,
      school,
      group,
      avatarUrl,
      lastUpdated: new Date(), // 添加更新时间戳
    });
    console.log("User document successfully updated!");
  } catch (error) {
    console.error("Error updating user document:", error);
    throw error;
  }
}

// 新增：保存用户资料功能
async function saveUserProfile() {
  const user = auth.currentUser;
  if (!user) {
    alert("No user is signed in. Please log in first.");
    return;
  }

  const nameInput = document.getElementById("nameInput");
  const schoolInput = document.getElementById("schoolInput");
  const groupInput = document.getElementById("groupInput");
  const avatar = document.getElementById("avatar");

  const name = nameInput?.value.trim();
  const school = schoolInput?.value.trim();
  const group = groupInput?.value;
  const avatarUrl = avatar.src; // 获取当前头像URL

  if (!name || !school) {
    alert("Please fill in all required fields (Name and School).");
    return;
  }

  try {
    // 更新Firestore中的用户数据
    await updateUserDocument(user.uid, name, school, group, avatarUrl);

    // 禁用表单
    document.getElementById("personalInfoFields").disabled = true;

    // 恢复按钮文本
    document.getElementById("editProfileBtn").textContent = "Edit Profile";

    alert("Profile updated successfully!");
  } catch (err) {
    console.error("Error saving profile:", err);
    alert("Failed to save profile. Please try again.");
  }
}

// 新增：处理头像上传
function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (file) {
    // 创建文件阅读器来读取图片
    const reader = new FileReader();
    reader.onload = function (e) {
      // 更新头像显示
      document.getElementById("avatar").src = e.target.result;

      // 自动保存到Firebase（可选）
      // 如果希望上传头像后立即保存，可以在这里调用saveUserProfile()
      // 但目前我们只在点击Save时保存
    };
    reader.readAsDataURL(file);
  }
}

// ------------------------------------------------------------
// DOM Content Loaded
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing event listeners...");

  // 编辑/保存按钮事件
  const editProfileBtn = document.getElementById("editProfileBtn");
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", function () {
      const isEditing = !document.getElementById("personalInfoFields").disabled;

      if (isEditing) {
        // 当前是编辑模式，点击后保存
        saveUserProfile();
      } else {
        // 当前是查看模式，点击后编辑
        editUserInfo();
      }
    });
  }

  // 返回按钮事件
  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.history.back();
    });
  }

  // 头像上传事件
  const avatarUpload = document.getElementById("avatarUpload");
  const uploadAvatarBtn = document.getElementById("uploadAvatarBtn");

  if (uploadAvatarBtn && avatarUpload) {
    uploadAvatarBtn.addEventListener("click", function () {
      avatarUpload.click();
    });

    avatarUpload.addEventListener("change", handleAvatarUpload);
  }

  // 加载用户数据
  populateUserInfo();
});

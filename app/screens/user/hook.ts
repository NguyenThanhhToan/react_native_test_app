import { login } from "@/app/redux/slice/authSlice";
import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/appStore";

export default function useUserScreen() {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user?.username || "");
    const [role, setRole] = useState(user?.role || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");

    const handleEditSave = () => {
        if (isEditing) {
            if (user) {
                dispatch(login({
                    ...user,
                    username,
                    email,
                    phone,
                }));
            }
            Alert.alert("Cập nhật thành công!");
        }
        setIsEditing(!isEditing);
    };

    return { user, isEditing, username, setUsername, role, setRole, email, setEmail, phone, setPhone, handleEditSave, };
}

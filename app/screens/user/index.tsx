import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import useUserScreen from "./hook";
import { styles } from "./style";

const UserScreen = () => {
    const navigation = useNavigation<any>();
    const {
        user,
        isEditing,
        username,
        setUsername,
        role,
        setRole,
        email,
        setEmail,
        phone,
        setPhone,
        handleEditSave,
    } = useUserScreen();

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Chưa đăng nhập</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Thông tin người dùng</Text>
            </View>

            <View style={styles.form}>
                <Text>Username:</Text>
                <TextInput style={styles.input} value={username} onChangeText={setUsername} editable={isEditing} />

                <Text>Role:</Text>
                <TextInput style={styles.input} value={role} onChangeText={setRole} editable={isEditing} />

                <Text>Email:</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={isEditing} />

                <Text>Phone:</Text>
                <TextInput style={styles.input} value={phone} onChangeText={setPhone} editable={isEditing} />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleEditSave}>
                <Text style={styles.saveButtonText}>{isEditing ? "Save" : "Edit"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserScreen;

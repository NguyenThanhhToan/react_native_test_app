import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  Dimensions,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ViewShot from 'react-native-view-shot';

const screen = Dimensions.get('window');

export default function ProfileScreen() {
  const viewShotRef = useRef<any>(null);

  // Vị trí vùng chọn (mặc định)
  const [selection, setSelection] = useState({ x: 50, y: 100, width: 150, height: 150 });
  const [dragging, setDragging] = useState(false);
  const [selectMode, setSelectMode] = useState(false); // trạng thái đang chọn vùng hay không

  // Lưu vị trí bắt đầu kéo để tính toán delta chính xác
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Quyền bị từ chối', 'Cần quyền truy cập thư viện để lưu ảnh.');
      }
    })();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => selectMode,
      onPanResponderGrant: () => {
        setDragging(true);
        // Lưu lại vị trí hiện tại khi bắt đầu kéo
        startPos.current = { x: selection.x, y: selection.y };
      },
      onPanResponderMove: (e, gesture) => {
        let newX = startPos.current.x + gesture.dx;
        let newY = startPos.current.y + gesture.dy;

        // Giới hạn vùng kéo không ra ngoài màn hình
        newX = Math.max(0, Math.min(newX, screen.width - selection.width));
        newY = Math.max(0, Math.min(newY, screen.height - selection.height));

        setSelection({ ...selection, x: newX, y: newY });
      },
      onPanResponderRelease: () => setDragging(false),
      onPanResponderTerminate: () => setDragging(false),
    })
  ).current;

  const onCapture = async () => {
    if (!viewShotRef.current) {
      Alert.alert('Lỗi', 'ViewShot chưa sẵn sàng');
      return;
    }
    if (!selectMode) {
      setSelectMode(true);
      return;
    }

    try {
      const uri = await viewShotRef.current.capture({
        format: 'jpg',
        quality: 0.9,
        rect: {
          x: selection.x,
          y: selection.y,
          width: selection.width,
          height: selection.height,
        },
      });
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert('Thành công', 'Ảnh đã được lưu vào thư viện!');
      setSelectMode(false);
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Không thể chụp màn hình');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ViewShot
        ref={viewShotRef}
        options={{ format: 'jpg', quality: 0.9 }}
        style={styles.content}
      >
        {/* Nội dung profile */}
        <View style={styles.profile}>
          <Text style={styles.name}>Nguyễn Văn A</Text>
          <Text style={styles.email}>nguyenvana@example.com</Text>
        </View>
      </ViewShot>

      {/* Khung chọn vùng kéo được, chỉ hiện khi selectMode = true */}
      {selectMode && (
        <View
          {...panResponder.panHandlers}
          style={[
            styles.selectionBox,
            {
              left: selection.x,
              top: selection.y,
              width: selection.width,
              height: selection.height,
              borderColor: dragging ? 'red' : 'blue',
            },
          ]}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button
          title={selectMode ? 'Chụp vùng đã chọn' : 'Bật chọn vùng chụp'}
          onPress={onCapture}
        />
        {selectMode && (
          <Button
            title="Hủy chọn vùng"
            onPress={() => setSelectMode(false)}
            color="red"
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, backgroundColor: '#eee', padding: 20 },
  profile: {
    alignItems: 'center',
    marginTop: 50,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    marginTop: 8,
    color: '#555',
  },
  selectionBox: {
    position: 'absolute',
    borderWidth: 2,
    backgroundColor: 'rgba(0,0,255,0.1)',
    zIndex: 1000,
  },
  buttonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
});

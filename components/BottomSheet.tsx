import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';

export const DownloadPicture = ({onClose}:{
    onClose: () => void;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    // <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        index={1}
        onClose={onClose}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["95%"]}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height:0}}

      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
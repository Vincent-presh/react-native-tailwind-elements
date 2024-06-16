import React, { memo, useCallback, useMemo } from 'react';
import { Dimensions } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet';
import { Easing, useReducedMotion } from 'react-native-reanimated';

interface BottomMethodSheetProps {
  reference: React.RefObject<BottomSheetModal>; // Reference to the BottomSheetModal component
  children: React.ReactNode; // Content to be rendered within the BottomSheetModal
  backgroundColor?: string; // Optional background color for the modal
}

const BottomMethodSheet: React.FC<BottomMethodSheetProps> = ({
  reference,
  children,
  backgroundColor = '#00000070', // Default background color
}) => {
  let height = Dimensions.get('window').height - 30;
  const snapPoints = useMemo(() => [height], [height]);
  const reducedMotion = useReducedMotion();
  const handleSheetChanges = useCallback(() => {}, []);
  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 100,
    easing: Easing.cubic,
  });
  const renderBackdrop = (prop: any) => (
    <BottomSheetBackdrop
      {...prop}
      pressBehavior={0}
      onPress={() => {
        reference?.current?.close();
      }}
      onChange={handleSheetChanges}
    />
  );

  return (
    <BottomSheetModal
      ref={reference}
      index={0}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      animateOnMount={!reducedMotion}
      animationConfigs={animationConfigs}
      enablePanDownToClose={true}
      backgroundStyle={{
        backgroundColor,
      }}
    >
      {children}
    </BottomSheetModal>
  );
};

export default memo(BottomMethodSheet);

import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const ResponsiveHeader = ({ backgroundImage, textImage }) => {
  const [orientation, setOrientation] = useState('portrait');
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const updateLayout = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
      setDimensions({ width, height });
    };

    updateLayout();

    const subscription = Dimensions.addEventListener('change', updateLayout);

    return () => subscription.remove();
  }, []);

  const containerHeight = orientation === 'landscape' ? dimensions.height * 0.3 : dimensions.height * 0.2;

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Image
        source={textImage}
        style={[
          styles.textLogo,
          orientation === 'landscape' && styles.textLogoLandscape
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textLogo: {
    position: 'absolute',
    width: '80%',
    height: '60%',
  },
  textLogoLandscape: {
    width: '60%',
    height: '70%',
  },
});

export default ResponsiveHeader;
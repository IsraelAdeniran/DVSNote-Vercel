import { StyleSheet } from 'react-native'; // For React Native styles
import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView
          source={{ uri: 'https://dvs-note-vercel.vercel.app/register' }} 
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

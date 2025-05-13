// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AadhaarVerification from './src/screens/AadhaarVerification';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="AadhaarVerification"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#2196F3',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       >
//         <Stack.Screen
//           name="AadhaarVerification"
//           component={AadhaarVerification}
//           options={{
//             title: 'Aadhaar Verification',
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

function App() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [resetData, setResetData] = useState({
    email: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleResetInputChange = (field, value) => {
    setResetData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreateAccount = () => {
    console.log('Creating account with:', formData);
  };

  const handleResetPassword = () => {
    console.log('Resetting password for:', resetData);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainWrapper}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Welcome To Kavach.ai</Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.authText}>Please Admin Authenticate Yourself</Text>
              
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter your number"
                  placeholderTextColor="#666"
                  keyboardType="phone-pad"
                />
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter Your Admin Password"
                  placeholderTextColor="#666"
                  secureTextEntry
                />
              </View>

              <TouchableOpacity 
                style={styles.forgotPasswordLink}
                onPress={() => setShowForgotPassword(!showForgotPassword)}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.loginButton]}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.button, styles.signupButton]}
                  onPress={() => setShowCreateAccount(!showCreateAccount)}
                >
                  <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
              </View>

              {showForgotPassword && (
                <View style={styles.resetPasswordContainer}>
                  <Text style={styles.resetPasswordTitle}>Reset Password</Text>
                  <TextInput 
                    style={styles.input} 
                    placeholder="Enter your email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    value={resetData.email}
                    onChangeText={(value) => handleResetInputChange('email', value)}
                  />
                  <TextInput 
                    style={styles.input} 
                    placeholder="New Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    value={resetData.newPassword}
                    onChangeText={(value) => handleResetInputChange('newPassword', value)}
                  />
                  <TextInput 
                    style={styles.input} 
                    placeholder="Confirm New Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    value={resetData.confirmNewPassword}
                    onChangeText={(value) => handleResetInputChange('confirmNewPassword', value)}
                  />
                  <TouchableOpacity 
                    style={[styles.button, styles.resetButton]}
                    onPress={handleResetPassword}
                  >
                    <Text style={styles.buttonText}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              )}

              {showCreateAccount && (
                <View style={styles.createAccountContainer}>
                  <Text style={styles.createAccountTitle}>Create New Account</Text>
                  <TextInput 
                    style={styles.input} 
                    placeholder="Full Name"
                    placeholderTextColor="#666"
                    value={formData.name}
                    onChangeText={(value) => handleInputChange('name', value)}
                  />
                  <TextInput 
                    style={styles.input} 
                    placeholder="Email Address"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                  />
                  <TextInput 
                    style={styles.input} 
                    placeholder="Phone Number"
                    placeholderTextColor="#666"
                    keyboardType="phone-pad"
                    value={formData.phone}
                    onChangeText={(value) => handleInputChange('phone', value)}
                  />
                  <TextInput 
                    style={styles.input} 
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                  />
                  <TextInput 
                    style={styles.input} 
                    placeholder="Confirm Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleInputChange('confirmPassword', value)}
                  />
                  <TouchableOpacity 
                    style={[styles.button, styles.createAccountButton]}
                    onPress={handleCreateAccount}
                  >
                    <Text style={styles.buttonText}>Create Account</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Powered by: Jadoun Tech Solution</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  authText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#2196F3',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#2196F3',
  },
  signupButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetPasswordContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  resetPasswordTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#FF5722',
    marginTop: 10,
  },
  createAccountContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  createAccountTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  createAccountButton: {
    backgroundColor: '#FF9800',
    marginTop: 10,
  },
  footerContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default App;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AadhaarVerification = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleAadhaarSubmit = async () => {
    if (!aadhaarNumber || aadhaarNumber.length !== 12) {
      Alert.alert('Error', 'Please enter a valid 12-digit Aadhaar number');
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aadhaarNumber }),
      });
      const data = await response.json();
      setVerificationResult(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to verify Aadhaar number');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async () => {
    // TODO: Implement image upload functionality
    Alert.alert('Info', 'Image upload functionality will be implemented');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="verified-user" size={40} color="#2196F3" />
        <Text style={styles.title}>Aadhaar Verification</Text>
        <Text style={styles.subtitle}>Verify identity using Aadhaar</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Aadhaar Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter 12-digit Aadhaar number"
          keyboardType="numeric"
          maxLength={12}
          value={aadhaarNumber}
          onChangeText={setAadhaarNumber}
        />
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={handleAadhaarSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Verify Aadhaar</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.divider}>
        <Text style={styles.dividerText}>OR</Text>
      </View>

      <View style={styles.imageContainer}>
        <Text style={styles.label}>Upload Aadhaar Card Image</Text>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleImageUpload}
        >
          <Icon name="cloud-upload" size={30} color="#2196F3" />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
      </View>

      {verificationResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Verification Result</Text>
          <View style={styles.resultCard}>
            <Text style={styles.resultText}>
              Name: {verificationResult.name}
            </Text>
            <Text style={styles.resultText}>
              DOB: {verificationResult.dob}
            </Text>
            <Text style={styles.resultText}>
              Gender: {verificationResult.gender}
            </Text>
            <Text style={styles.resultText}>
              Address: {verificationResult.address}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  inputContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  verifyButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerText: {
    color: '#666',
    fontSize: 16,
  },
  imageContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  uploadButton: {
    borderWidth: 2,
    borderColor: '#2196F3',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  uploadText: {
    color: '#2196F3',
    fontSize: 16,
    marginTop: 10,
  },
  resultContainer: {
    padding: 20,
    margin: 10,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  resultCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});

export default AadhaarVerification; 
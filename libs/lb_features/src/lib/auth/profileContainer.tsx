import React, { useState, useEffect, useCallback } from 'react';
import {
  Pressable,
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import tw from 'twrnc'; // Tailwind styling
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import {
  useGetUserDetailsQuery,
  useDeleteUserDetailsMutation,
} from './authService'; // Replace with actual service
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import LoadingScreen from '../../../../../app/loadingScreen';
import Login from '../../../../../app/common/login'; // Import Login component
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const ProfileContainer: React.FC = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false); // State for deletion confirmation
  const [isDeleting, setIsDeleting] = useState(false); // State to track deletion process
  const [logoutError, setLogoutError] = useState<string | null>(null); // State for logout error handling

  const defaultProfilePicture = 'https://your-default-profile-picture-url';

  useFocusEffect(
    useCallback(() => {
      const fetchUserId = async () => {
        try {
          const storedUserId = await AsyncStorage.getItem('userId');
          setConfirmDelete(false); // Reset delete confirmation on screen focus
          if (storedUserId !== userId) {
            setUserId(storedUserId);
          }
        } catch (error) {
          console.error('Error fetching userId:', error);
        }
      };

      fetchUserId();
    }, [userId])
  );

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useGetUserDetailsQuery(
    {
      URL_PARAMS: [userId],
    },
    {
      skip: !userId || userId.startsWith('xz-'), // Skip if userId is not valid
      refetchOnMountOrArgChange: true, // Refetch on userId change
    }
  );

  const [deleteUserDetails] = useDeleteUserDetailsMutation();

  const handleDeleteClick = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true); // Prompt the user for confirmation before deletion
      return;
    }

    if (userId && !userId.startsWith('xz-')) {
      setIsDeleting(true);
      try {
        await deleteUserDetails({
          URL_PARAMS: [userId],
        }).unwrap();
        await AsyncStorage.removeItem('userId');
        setUserId(null);
        alert('User Profile has been Deleted');
        router.push('/');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user profile. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    } else {
      alert('Invalid user ID. Cannot proceed with deletion.');
    }
  };

  const handleLogout = async () => {
    // Show confirmation dialog before logout
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userId');
              setUserId(null);
              alert('You have successfully logged out.');
            } catch (error) {
              console.error('Error logging out:', error);
              setLogoutError('Failed to log out. Please try again.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (userLoading) {
    return <LoadingScreen />;
  }

  const isUserLoggedOut = !userId || userId.startsWith('xz-') || userError;

  if (isUserLoggedOut) {
    return (
      <ScrollView contentContainerStyle={tw`flex flex-col items-center`}>
        <Text style={tw`text-2xl text-white my-2`}>You are not Logged In</Text>
        <Login />
      </ScrollView>
    );
  }

  const name = userData?.user?.userDetails?.name || 'Anonymous user';
  const profilePicture =
    userData?.user?.userDetails?.profilePicture || defaultProfilePicture;
  const emailId =
    userData?.user?.userDetails?.contactDetails?.email || 'No email available';

  return (
    <View style={tw`w-full bg-gray-900 min-h-screen px-4`}>
      <View style={tw`mb-6`}>
        <Text style={tw`text-2xl text-white mt-7 text-center mb-4`}>
          Profile Details
        </Text>
        <View style={tw`mb-6 items-center`}>
          <Image
            source={{ uri: profilePicture }}
            style={tw`w-32 h-32 rounded-full bg-gray-300`}
            onError={() => console.log('Failed to load image')}
          />
        </View>

        <View style={tw`items-center`}>
          <Text style={tw`text-xl md:text-2xl mt-2 text-center text-white font-bold`}>
            {name}
          </Text>
          <Text style={tw`text-lg md:text-xl mt-1 text-center text-gray-300`}>
            {emailId}
          </Text>
        </View>

        {/* Delete Button */}
        <View style={tw`flex-row items-center justify-center mt-6`}>
          <Text style={tw`text-lg md:text-xl text-red-400 font-semibold mr-1`}>
            Delete your profile & activities
          </Text>
          <Pressable
            onPress={handleDeleteClick}
            style={tw`bg-red-600 p-3 rounded-full items-center justify-center`}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Ionicons name="trash" size={24} color="white" />
            )}
          </Pressable>
        </View>

        {/* Logout Button */}
        <View style={tw`flex-row items-center justify-center mt-6`}>
          <Text style={tw`text-lg md:text-xl text-white font-semibold mr-1`}>
            Logout
          </Text>
          <Pressable
            onPress={handleLogout}
            style={tw`bg-blue-600 p-3 rounded-full items-center justify-center`}
          >
            <Ionicons name="log-out-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Show delete confirmation if triggered */}
      {confirmDelete && !isDeleting && (
        <View style={tw`mt-6 p-4 bg-red-100 rounded`}>
          <Text style={tw`text-red-500 text-center`}>
            This will delete all your data. Click again to confirm.
          </Text>
        </View>
      )}

      {/* Show logout error if exists */}
      {logoutError && (
        <View style={tw`mt-4 p-4 bg-red-100 rounded`}>
          <Text style={tw`text-red-500 text-center`}>{logoutError}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileContainer;

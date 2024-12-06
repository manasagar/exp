import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Roles = ({ roles }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <View style={tw`mt-4`}>
      {roles.map((role) => (
        <TouchableOpacity
          key={role.roleId}
          style={tw`mb-2 p-2 border rounded ${selectedRole === role.roleId ? 'border-blue-500' : 'border-gray-300'}`}
          onPress={() => setSelectedRole(role.roleId)}
        >
          <Text style={tw`text-lg font-bold`}>{role.displayName}</Text>
          <Text style={tw`text-gray-600`}>{role.desc}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Roles;

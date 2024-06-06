import React, { useState, useLayoutEffect,useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MatchesScreen = () => {
  const navigation = useNavigation();

  // Updated dummy data with status
  const [matches, setMatches] = useState([]);

  const [filter, setFilter] = useState('Live'); // Filter state

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'My Matches' });
  }, [navigation]);

  useEffect(() => {
    // Replace 'https://example.com/api/matches' with your actual API endpoint
    fetch('https://localhost:5000/match')
      .then(response => response.json())
      .then(data => setMatches(data))
      .catch(error => console.error('Fetching matches failed:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  // Filter matches based on the selected filter
  const filteredMatches = matches.filter(match => {
    if (filter === 'All') return true;
    return match.status === filter;
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
        <Button title="Live" onPress={() => setFilter('Live')} />
        <Button title="Upcoming" onPress={() => setFilter('Upcoming')} />
        <Button title="Finished" onPress={() => setFilter('Finished')} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {filteredMatches.map((match) => (
          <View key={match.match_id} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{match.name}</Text>
            <Text>{match.schedule}</Text>
            <Text>Status: {match.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MatchesScreen;
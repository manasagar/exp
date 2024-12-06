const RewardDisplay = ({ userId }: { userId: string }) => {
  const [rewardCount, setRewardCount] = useState(0);

  useEffect(() => {
    const fetchRewardCount = async () => {
      const response = await fetch(`https://example.com/rewards/${userId}`);
      const data = await response.json();
      setRewardCount(data.rewardCount);
    };
    fetchRewardCount();
  }, [userId]);

  return (
    <View>
      <Text>You have {rewardCount} rewards!</Text>
    </View>
  );
};

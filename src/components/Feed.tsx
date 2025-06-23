
import PostCard from './PostCard';

const Feed = () => {
  // Sample positive news data
  const posts = [
    {
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e5ad?w=150&h=150&fit=crop&crop=face",
        karmaLevel: 15
      },
      content: "Amazing news! A group of teenagers in our city started a free tutoring program for younger students. They've already helped over 200 kids improve their grades! 📚✨ This gives me so much hope for the future generation.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
      category: "Community",
      likes: 234,
      comments: 45,
      timeAgo: "2 hours ago",
      isLiked: true
    },
    {
      author: {
        name: "Miguel Rodriguez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        karmaLevel: 23
      },
      content: "Scientists have successfully restored coral reefs using innovative 3D printing technology! 🐠🌊 Over 1,000 marine species are returning to areas that were once barren. Nature's resilience is truly inspiring!",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&h=300&fit=crop",
      category: "Environment",
      likes: 567,
      comments: 89,
      timeAgo: "4 hours ago"
    },
    {
      author: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        karmaLevel: 31
      },
      content: "Local bakery started giving free bread to families in need every Sunday. The owner said: 'Food is love, and everyone deserves love.' The community response has been overwhelming! ❤️🍞",
      category: "Kindness Acts",
      likes: 445,
      comments: 67,
      timeAgo: "6 hours ago",
      isLiked: true
    },
    {
      author: {
        name: "Dr. James Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        karmaLevel: 42
      },
      content: "Breakthrough in medical research! New treatment shows 95% success rate in early-stage trials for a rare disease. Thousands of families now have hope for the future. Science continues to amaze! 🧬💙",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      category: "Innovation",
      likes: 789,
      comments: 123,
      timeAgo: "8 hours ago"
    }
  ];

  return (
    <div className="flex-1 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Positivity Feed</h2>
        <p className="text-gray-600">Discover inspiring stories and good news from around the world</p>
      </div>
      
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
      
      {/* Load more indicator */}
      <div className="text-center py-8">
        <div className="animate-bounce-gentle inline-block">
          <div className="w-3 h-3 bg-dopamine-blue rounded-full mx-1 animate-pulse"></div>
        </div>
        <p className="text-gray-500 mt-2">Loading more positive stories...</p>
      </div>
    </div>
  );
};

export default Feed;

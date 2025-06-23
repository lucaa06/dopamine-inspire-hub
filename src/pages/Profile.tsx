
import React, { useState } from 'react';
import { User, Camera, Edit3, MapPin, Calendar, Heart, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import VerticalSidebar from '@/components/VerticalSidebar';

const Profile = () => {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);

  const userStats = [
    { label: 'Good News Shared', value: 42, icon: Heart, color: 'text-red-500' },
    { label: 'People Inspired', value: 1247, icon: Star, color: 'text-yellow-500' },
    { label: 'Kindness Points', value: 3856, icon: Trophy, color: 'text-blue-500' },
  ];

  const achievements = [
    { name: 'First Share', description: 'Shared your first good news!', earned: true },
    { name: 'Inspiration Master', description: 'Inspired 1000+ people', earned: true },
    { name: 'Daily Sharer', description: 'Shared good news for 30 days straight', earned: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      <VerticalSidebar />
      
      <main className="container mx-auto px-4 py-8 ml-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card className="glass-card border-0 animate-slide-in-up">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User size={48} className="text-white" />
                    </div>
                    <Button
                      size="icon"
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-white dark:border-gray-800"
                    >
                      <Camera size={16} />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold gradient-text">Marco Rossi</h1>
                    <p className="text-gray-600 dark:text-gray-300">Spreading positivity, one story at a time ✨</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>Milano, Italy</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>Joined March 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2"
                >
                  <Edit3 size={16} />
                  <span>Edit Profile</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userStats.map((stat, index) => (
              <Card key={index} className="glass-card border-0 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <stat.icon size={32} className={`mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold gradient-text">{stat.value.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <Card className="glass-card border-0 animate-slide-in-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="text-yellow-500" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      achievement.earned
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{achievement.name}</h3>
                      {achievement.earned && <Badge className="bg-yellow-500">Earned</Badge>}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;

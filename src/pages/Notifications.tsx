
import React from 'react';
import { Bell, Heart, MessageCircle, UserPlus, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import VerticalSidebar from '@/components/VerticalSidebar';

const Notifications = () => {
  const { t } = useLanguage();

  const notifications = [
    {
      id: 1,
      type: 'like',
      icon: Heart,
      user: 'Anna Bianchi',
      action: 'liked your post about community gardens',
      time: '2 minutes ago',
      unread: true,
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'comment',
      icon: MessageCircle,
      user: 'Giuseppe Verdi',
      action: 'commented on your story',
      time: '15 minutes ago',
      unread: true,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'follow',
      icon: UserPlus,
      user: 'Maria Rossi',
      action: 'started following you',
      time: '1 hour ago',
      unread: false,
      color: 'text-green-500'
    },
    {
      id: 4,
      type: 'achievement',
      icon: Award,
      user: 'System',
      action: 'You earned the "Kindness Champion" badge!',
      time: '2 hours ago',
      unread: false,
      color: 'text-yellow-500'
    },
    {
      id: 5,
      type: 'like',
      icon: Heart,
      user: 'Luca Romano',
      action: 'loved your positive news story',
      time: '3 hours ago',
      unread: false,
      color: 'text-red-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      <VerticalSidebar />
      
      <main className="container mx-auto px-4 py-8 ml-16">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-black dark:text-white mb-2">
              Hello "nickname" 👋
            </h1>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Bell className="text-blue-500" size={32} />
              <h1 className="text-3xl font-bold text-black dark:text-white">Notifications</h1>
            </div>
            <Button variant="outline" size="sm" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              Mark all as read
            </Button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className={`glass-card border-0 transition-all hover:shadow-lg ${
                notification.unread ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full ${notification.unread ? 'bg-blue-100 dark:bg-blue-900/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
                      <notification.icon className={notification.color} size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-black dark:text-white">
                          <span className="font-semibold">{notification.user}</span>{' '}
                          <span className="text-gray-600 dark:text-gray-300">{notification.action}</span>
                        </p>
                        {notification.unread && (
                          <Badge className="bg-blue-500 text-white text-xs">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {notifications.length === 0 && (
            <Card className="glass-card border-0">
              <CardContent className="p-8 text-center">
                <Bell className="mx-auto mb-4 text-gray-400" size={48} />
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">No notifications yet</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When people interact with your posts, you'll see notifications here.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Notifications;


import React, { useState } from 'react';
import { Bell, Heart, MessageCircle, UserPlus, Star, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import VerticalSidebar from '@/components/VerticalSidebar';

const Notifications = () => {
  const { t } = useLanguage();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: 'Anna Bianchi',
      message: 'liked your good news about the community garden',
      time: '2 minutes ago',
      read: false,
      icon: Heart,
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'comment',
      user: 'Giuseppe Verdi',
      message: 'commented on your post about helping elderly neighbors',
      time: '15 minutes ago',
      read: false,
      icon: MessageCircle,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'follow',
      user: 'Maria Rossi',
      message: 'started following you',
      time: '1 hour ago',
      read: true,
      icon: UserPlus,
      color: 'text-green-500'
    },
    {
      id: 4,
      type: 'achievement',
      user: 'Dopamine',
      message: 'You earned the "Inspiration Master" badge!',
      time: '3 hours ago',
      read: true,
      icon: Star,
      color: 'text-yellow-500'
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      <VerticalSidebar />
      
      <main className="container mx-auto px-4 py-8 ml-16">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="text-blue-500" size={32} />
              <h1 className="text-3xl font-bold gradient-text">Notifications</h1>
              {unreadCount > 0 && (
                <Badge className="bg-red-500 text-white">{unreadCount}</Badge>
              )}
            </div>
            {unreadCount > 0 && (
              <Button variant="outline" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            )}
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <Card
                key={notification.id}
                className={`glass-card border-0 transition-all duration-300 hover:scale-[1.02] animate-slide-in-up ${
                  !notification.read ? 'ring-2 ring-blue-500/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 ${notification.color}`}>
                      <notification.icon size={20} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                              {notification.user}
                            </span>{' '}
                            <span className="text-gray-700 dark:text-gray-300">
                              {notification.message}
                            </span>
                          </p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {!notification.read && (
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => markAsRead(notification.id)}
                              className="h-8 w-8"
                            >
                              <Check size={16} />
                            </Button>
                          )}
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8 text-red-500 hover:bg-red-50"
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {notifications.length === 0 && (
            <Card className="glass-card border-0">
              <CardContent className="p-12 text-center">
                <Bell size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold mb-2">No notifications yet</h3>
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

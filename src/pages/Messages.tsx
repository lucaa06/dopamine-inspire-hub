
import React, { useState } from 'react';
import { MessageCircle, Send, Search, Phone, Video, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import VerticalSidebar from '@/components/VerticalSidebar';

const Messages = () => {
  const { t } = useLanguage();
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Anna Bianchi',
      lastMessage: 'That story about the rescued cat was so heartwarming! 🐱',
      time: '2m ago',
      unread: 2,
      avatar: 'AB',
      online: true
    },
    {
      id: 2,
      name: 'Giuseppe Verdi',
      lastMessage: 'Thanks for sharing that initiative!',
      time: '1h ago',
      unread: 0,
      avatar: 'GV',
      online: false
    },
    {
      id: 3,
      name: 'Maria Rossi',
      lastMessage: 'I loved your post about the community garden 🌱',
      time: '3h ago',
      unread: 1,
      avatar: 'MR',
      online: true
    },
  ];

  const messages = [
    { id: 1, sender: 'Anna Bianchi', message: 'Hi! I saw your post about the community garden initiative', time: '10:30 AM', isOwn: false },
    { id: 2, sender: 'You', message: 'Hello Anna! Yes, it was such an inspiring project', time: '10:32 AM', isOwn: true },
    { id: 3, sender: 'Anna Bianchi', message: 'I would love to get involved. Do you have more details?', time: '10:35 AM', isOwn: false },
    { id: 4, sender: 'You', message: 'Absolutely! They meet every Saturday at 9 AM in the central park', time: '10:37 AM', isOwn: true },
    { id: 5, sender: 'Anna Bianchi', message: 'That story about the rescued cat was so heartwarming! 🐱', time: '10:45 AM', isOwn: false },
  ];

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      <VerticalSidebar />
      
      <main className="container mx-auto px-4 py-8 ml-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <MessageCircle className="text-blue-500" size={32} />
            <h1 className="text-3xl font-bold gradient-text">Messages</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <Card className="glass-card border-0 lg:col-span-1">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Search */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-10 bg-gray-100 dark:bg-gray-800 border-none"
                    />
                  </div>
                </div>

                {/* Conversations */}
                <div className="flex-1 overflow-y-auto">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedChat(conversation.id)}
                      className={`p-4 cursor-pointer border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                        selectedChat === conversation.id ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {conversation.avatar}
                          </div>
                          {conversation.online && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-sm truncate">{conversation.name}</h3>
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 truncate mt-1">
                            {conversation.lastMessage}
                          </p>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge className="bg-blue-500 text-white text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="glass-card border-0 lg:col-span-2">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedConversation?.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedConversation?.name}</h3>
                      <p className="text-sm text-gray-500">
                        {selectedConversation?.online ? 'Online' : 'Last seen 2h ago'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="icon" variant="ghost">
                      <Phone size={20} />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Video size={20} />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <MoreVertical size={20} />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                          message.isOwn
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${message.isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600">
                      <Send size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;

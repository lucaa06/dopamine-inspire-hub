
import React, { useState } from 'react';
import { User, Camera, MapPin, Calendar, Mail, Phone, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import VerticalSidebar from '@/components/VerticalSidebar';

const Profile = () => {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Passionate about spreading positivity and making the world a better place through random acts of kindness.',
    joinDate: 'January 2024',
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile saved:', profile);
  };

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

          <div className="flex items-center space-x-3 mb-6">
            <User className="text-blue-500" size={32} />
            <h1 className="text-3xl font-bold text-black dark:text-white">Profile</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="glass-card border-0 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-black dark:text-white">Personal Information</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="border-blue-500 text-blue-500 hover:bg-blue-50"
                  >
                    <Edit size={16} className="mr-2" />
                    {isEditing ? 'Save' : 'Edit'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      JD
                    </div>
                    {isEditing && (
                      <Button size="icon" className="absolute -bottom-2 -right-2 rounded-full bg-blue-500 hover:bg-blue-600">
                        <Camera size={16} />
                      </Button>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">{profile.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Member since {profile.joinDate}</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-black dark:text-white">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded text-black dark:text-white">{profile.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-black dark:text-white">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded text-black dark:text-white">{profile.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-black dark:text-white">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded text-black dark:text-white">{profile.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-black dark:text-white">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={profile.location}
                        onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded text-black dark:text-white">{profile.location}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio" className="text-black dark:text-white">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                      className="mt-1 min-h-[100px]"
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded text-black dark:text-white">{profile.bio}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-black dark:text-white">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">156</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">People Inspired</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">23</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Good News Shared</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2,847</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Positive Points</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;


import { Calendar, Globe, Heart, Lightbulb, Sparkles, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Sidebar = () => {
  const categories = [
    { name: 'Kindness Acts', icon: Heart, count: 1284, color: 'text-dopamine-pink' },
    { name: 'Innovation', icon: Lightbulb, count: 892, color: 'text-dopamine-orange' },
    { name: 'Environment', icon: Globe, count: 756, color: 'text-dopamine-green' },
    { name: 'Community', icon: Users, count: 634, color: 'text-dopamine-blue' },
    { name: 'Inspiration', icon: Sparkles, count: 523, color: 'text-dopamine-purple' },
  ];

  return (
    <div className="w-80 space-y-6 p-6">
      {/* User Stats */}
      <Card className="dopamine-card border-0">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-dopamine-blue" />
            Your Positive Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Positive Energy</span>
              <span className="font-semibold text-dopamine-blue">2,847 pts</span>
            </div>
            <Progress value={67} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">Next level: 3,000 pts</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-dopamine-blue/10 rounded-lg">
              <div className="text-xl font-bold text-dopamine-blue">156</div>
              <div className="text-xs text-gray-600">People Inspired</div>
            </div>
            <div className="text-center p-3 bg-dopamine-green/10 rounded-lg">
              <div className="text-xl font-bold text-dopamine-green">23</div>
              <div className="text-xs text-gray-600">Good News Shared</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-dopamine-orange/10 text-dopamine-orange border-0">
              Kindness Champion
            </Badge>
            <Badge className="bg-dopamine-purple/10 text-dopamine-purple border-0">
              Super Inspirer
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="dopamine-card border-0">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Trending Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-3">
                <category.icon className={`w-5 h-5 ${category.color}`} />
                <span className="font-medium">{category.name}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Daily Inspiration */}
      <Card className="dopamine-card border-0 bg-gradient-to-br from-dopamine-blue/5 to-dopamine-purple/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-dopamine-purple" />
            Daily Inspiration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-sm italic text-gray-700 mb-3">
            "Be the reason someone believes in the goodness of people."
          </blockquote>
          <p className="text-xs text-gray-500">Share this inspiration with your network</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;

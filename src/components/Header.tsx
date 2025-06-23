
import { Bell, MessageCircle, Plus, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-positive rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-dopamine-blue to-dopamine-green bg-clip-text text-transparent">
              Dopamine
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for positive news..." 
                className="pl-10 rounded-full border-gray-200 focus:border-dopamine-blue"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button size="sm" className="dopamine-button">
              <Plus className="w-4 h-4 mr-2" />
              Share Good News
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-dopamine-blue/10">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-dopamine-orange rounded-full"></span>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-dopamine-blue/10">
              <MessageCircle className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-dopamine-blue/10">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

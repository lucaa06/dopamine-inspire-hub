
import { Heart, MessageCircle, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
    karmaLevel: number;
  };
  content: string;
  image?: string;
  category: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked?: boolean;
}

const PostCard = ({ 
  author, 
  content, 
  image, 
  category, 
  likes, 
  comments, 
  timeAgo, 
  isLiked = false 
}: PostCardProps) => {
  return (
    <div className="dopamine-card p-6 mb-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10 border-2 border-dopamine-blue/20">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-gradient-positive text-white">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <div className="flex items-center space-x-2">
              <Badge 
                variant="outline" 
                className="text-xs bg-dopamine-blue/10 text-dopamine-blue border-dopamine-blue/20"
              >
                <Star className="w-3 h-3 mr-1 fill-current" />
                Level {author.karmaLevel}
              </Badge>
              <span className="text-xs text-gray-500">{timeAgo}</span>
            </div>
          </div>
        </div>
        
        <Badge className="bg-dopamine-green/10 text-dopamine-green border-dopamine-green/20">
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>

      {/* Image */}
      {image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center space-x-2 ${
              isLiked 
                ? 'text-dopamine-pink hover:text-dopamine-pink' 
                : 'text-gray-500 hover:text-dopamine-pink'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-500 hover:text-dopamine-blue">
            <MessageCircle className="w-4 h-4" />
            <span>{comments}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-dopamine-green">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        
        <Button 
          size="sm" 
          className="bg-dopamine-orange/10 text-dopamine-orange border border-dopamine-orange/20 hover:bg-dopamine-orange hover:text-white"
        >
          Inspire
        </Button>
      </div>
    </div>
  );
};

export default PostCard;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <img src="/lovable-uploads/547a577d-bf75-4ae0-9cc4-a9303fce5ddc.png" alt="Dopamine Logo" className="w-12 h-12 invert" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Dopamine
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Accedi al tuo account per diffondere positività
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-white/20">
          <CardHeader>
            <CardTitle className="text-center">{t('login')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </Button>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                {t('login')}
              </Button>

              <div className="text-center space-y-2">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Password dimenticata?
                </Link>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Non hai un account?{' '}
                  <Link to="/register" className="text-blue-600 hover:underline">
                    {t('register')}
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;

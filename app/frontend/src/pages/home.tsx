import { Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/contexts/auth.context-hook';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/products');
    } else {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Flex>
      <Text>Você está sendo redirecionado. Aguarde...</Text>
    </Flex>
  );
}

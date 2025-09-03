import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface Order {
  id: string;
  status: string;
  createdAt: string;
  shippingData: any;
}

const TrackOrder = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (orderId) {
      const orders = JSON.parse(localStorage.getItem('modaflow-orders') || '[]');
      const foundOrder = orders.find((o: Order) => o.id === orderId);
      setOrder(foundOrder || null);
    }
  }, [orderId]);

  const trackingSteps = [
    { id: 'confirmed', title: 'Pedido confirmado', description: 'Tu pedido ha sido confirmado', icon: CheckCircle },
    { id: 'processing', title: 'Preparando pedido', description: 'Estamos preparando tu pedido', icon: Package },
    { id: 'shipped', title: 'En camino', description: 'Tu pedido está en camino', icon: Truck },
    { id: 'delivered', title: 'Entregado', description: 'Tu pedido ha sido entregado', icon: CheckCircle }
  ];

  const getCurrentStepIndex = (status: string) => {
    return trackingSteps.findIndex(step => step.id === status);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Pedido no encontrado</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const currentStepIndex = getCurrentStepIndex(order.status);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rastrear Pedido</h1>
          <p className="text-gray-600 mb-8">Pedido #{order.id}</p>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Estado del envío</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = index <= currentStepIndex;
                  const isCurrent = index === currentStepIndex;
                  
                  return (
                    <div key={step.id} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {isCurrent ? (
                          <Clock className="h-5 w-5" />
                        ) : (
                          <Icon className="h-5 w-5" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-medium ${
                          isCompleted ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm ${
                          isCompleted ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                        {isCurrent && (
                          <p className="text-xs text-blue-600 mt-1">
                            Actualizado el {formatDate(order.createdAt)}
                          </p>
                        )}
                      </div>
                      
                      {index < trackingSteps.length - 1 && (
                        <div className={`absolute left-5 mt-10 w-0.5 h-6 ${
                          isCompleted ? 'bg-green-200' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información de entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">{order.shippingData.name}</p>
                <p className="text-gray-600">{order.shippingData.street}</p>
                <p className="text-gray-600">
                  {order.shippingData.city}, {order.shippingData.state} {order.shippingData.zipCode}
                </p>
                <p className="text-gray-600">{order.shippingData.phone}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackOrder;
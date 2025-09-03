
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const Orders = () => {
  // Mock orders data
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 159.97,
      items: [
        { name: 'Nike Dri-FIT T-Shirt', quantity: 2, price: 29.99 },
        { name: 'Sports Pants', quantity: 1, price: 99.99 }
      ],
      tracking: 'TRK123456789'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 89.99,
      items: [
        { name: 'Levi\'s 501 Jeans', quantity: 1, price: 89.99 }
      ],
      tracking: 'TRK987654321'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-22',
      status: 'processing',
      total: 249.98,
      items: [
        { name: 'Adidas Sneakers', quantity: 1, price: 129.99 },
        { name: 'North Face Jacket', quantity: 1, price: 119.99 }
      ],
      tracking: null
    },
    {
      id: 'ORD-2024-004',
      date: '2024-01-25',
      status: 'pending',
      total: 79.99,
      items: [
        { name: 'Zara Dress', quantity: 1, price: 79.99 }
      ],
      tracking: null
    }
  ];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'processing':
        return <Package className="h-5 w-5 text-yellow-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'shipped':
        return 'Shipped';
      case 'processing':
        return 'Processing';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };
  
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const completedOrders = orders.filter(order => order.status === 'delivered').length;
  const pendingOrders = orders.filter(order => order.status === 'pending' || order.status === 'processing').length;
  
  return (
    <PageLayout title="My Orders">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Summary Cards */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-card rounded-lg p-3 sm:p-6 shadow">
            <h3 className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Total Spent</h3>
            <p className="text-lg sm:text-2xl font-bold">${totalSpent.toFixed(2)}</p>
          </div>
          <div className="bg-card rounded-lg p-3 sm:p-6 shadow">
            <h3 className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Completed Orders</h3>
            <p className="text-lg sm:text-2xl font-bold text-green-500">{completedOrders}</p>
          </div>
          <div className="bg-card rounded-lg p-3 sm:p-6 shadow">
            <h3 className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Pending Orders</h3>
            <p className="text-lg sm:text-2xl font-bold text-yellow-500">{pendingOrders}</p>
          </div>
        </div>
        
        {/* Orders List */}
        <div className="lg:col-span-4">
          <div className="bg-card rounded-lg p-3 sm:p-6 shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Order History</h2>
            <div className="space-y-4 sm:space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">{order.id}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Order placed on {new Date(order.date).toLocaleDateString('en-US')}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      {getStatusIcon(order.status)}
                      <span className="text-xs sm:text-sm font-medium">{getStatusText(order.status)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-xs sm:text-sm">
                        <span className="truncate pr-2">{item.name} x{item.quantity}</span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-3 sm:pt-4 border-t">
                    <div>
                      {order.tracking && (
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Tracking: {order.tracking}
                        </p>
                      )}
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-semibold text-sm sm:text-base">Total: ${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                    {order.status === 'delivered' && (
                      <>
                        <button className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded hover:bg-gray-50">
                          Buy Again
                        </button>
                        <button className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded hover:bg-gray-50">
                          Write Review
                        </button>
                      </>
                    )}
                    {order.tracking && (
                      <button className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90">
                        Track Order
                      </button>
                    )}
                    {(order.status === 'pending' || order.status === 'processing') && (
                      <button className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-red-600 border border-red-200 rounded hover:bg-red-50">
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Orders;

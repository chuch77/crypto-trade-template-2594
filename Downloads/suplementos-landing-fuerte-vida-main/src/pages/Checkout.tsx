import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, Truck, X } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

const CheckoutPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart()
  
  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 9.99 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax
  return (
    <div className="min-h-screen bg-gym-dark">
      <Header />
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gym-text-light mb-4">
              Finalizar <span className="bg-gradient-primary bg-clip-text text-transparent">Compra</span>
            </h1>
            <p className="text-gym-text-muted">Completa tu pedido de forma segura</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Shipping Info */}
              <Card className="bg-gradient-card border-gym-primary/20 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Truck className="h-5 w-5 text-gym-primary" />
                  <h2 className="text-xl font-bold text-gym-text-light">Información de Envío</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Nombre</label>
                    <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Apellido</label>
                    <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="Tu apellido" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Email</label>
                    <Input type="email" className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="tu@email.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Dirección</label>
                    <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="Calle y número" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Ciudad</label>
                    <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="Tu ciudad" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Código Postal</label>
                    <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="12345" />
                  </div>
                </div>
              </Card>

              {/* Payment Info */}
              <Card className="bg-gradient-card border-gym-primary/20 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <CreditCard className="h-5 w-5 text-gym-primary" />
                  <h2 className="text-xl font-bold text-gym-text-light">Información de Pago</h2>
                  <Lock className="h-4 w-4 text-gym-primary ml-auto" />
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Número de Tarjeta</label>
                    <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gym-text-light mb-2">Fecha de Vencimiento</label>
                      <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="MM/AA" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gym-text-light mb-2">CVV</label>
                      <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gym-text-light mb-2">Nombre en la Tarjeta</label>
                    <Input className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary" placeholder="Como aparece en la tarjeta" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-gradient-card border-gym-primary/20 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gym-text-light mb-6">Resumen del Pedido</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gym-dark rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                        <div>
                          <p className="text-sm font-medium text-gym-text-light">{item.name}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-gym-primary/20 text-gym-primary rounded text-sm hover:bg-gym-primary/30"
                            >
                              -
                            </button>
                            <span className="text-xs text-gym-text-muted px-2">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-gym-primary/20 text-gym-primary rounded text-sm hover:bg-gym-primary/30"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gym-text-light">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-6 h-6 bg-red-500/20 text-red-500 rounded text-sm hover:bg-red-500/30"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-gym-primary/20 mb-4" />
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gym-text-muted">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gym-text-muted">
                    <span>Envío:</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gym-text-muted">
                    <span>Impuestos:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-gym-primary/20" />
                  <div className="flex justify-between text-xl font-bold text-gym-text-light">
                    <span>Total:</span>
                    <span className="text-gym-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-semibold py-3 mb-4">
                  Completar Pedido
                </Button>
                
                <div className="text-center text-xs text-gym-text-muted">
                  <Lock className="h-3 w-3 inline mr-1" />
                  Pago 100% seguro y encriptado
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CheckoutPage
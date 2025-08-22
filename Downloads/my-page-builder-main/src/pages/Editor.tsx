import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Layers, 
  Code, 
  Eye, 
  Download, 
  Copy, 
  Monitor, 
  Tablet, 
  Smartphone,
  Plus,
  Settings,
  Save,
  Undo,
  Redo,
  LayoutGrid,
  Image,
  Type,
  FileText,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Mail,
  Menu
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// Componentes de bloques
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import PromotionalCards from "@/components/PromotionalCards";
import Footer from "@/components/Footer";

const Editor = () => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showPreview, setShowPreview] = useState(false);
  
  // Lista de componentes disponibles
  const componentBlocks = [
    { 
      category: "Layout", 
      items: [
        { name: "Header", icon: <Menu /> },
        { name: "Hero", icon: <LayoutGrid /> },
        { name: "Grid", icon: <LayoutGrid /> },
        { name: "Columns", icon: <LayoutGrid /> },
        { name: "Container", icon: <LayoutGrid /> }
      ]
    },
    { 
      category: "Content", 
      items: [
        { name: "Text", icon: <Type /> },
        { name: "Image", icon: <Image /> },
        { name: "Gallery", icon: <Image /> },
        { name: "Video", icon: <FileText /> },
        { name: "Icon", icon: <FileText /> }
      ]
    },
    { 
      category: "Commerce", 
      items: [
        { name: "Products", icon: <ShoppingCart /> },
        { name: "Categories", icon: <ShoppingCart /> },
        { name: "Cart", icon: <ShoppingCart /> },
        { name: "Pricing", icon: <CreditCard /> }
      ]
    },
    { 
      category: "Marketing", 
      items: [
        { name: "Testimonials", icon: <MessageSquare /> },
        { name: "Benefits", icon: <Layers /> },
        { name: "Features", icon: <Layers /> },
        { name: "CTA", icon: <Layers /> },
        { name: "Contact", icon: <Mail /> }
      ]
    }
  ];
  
  // Componentes añadidos al canvas
  const [addedComponents, setAddedComponents] = useState([
    { id: 1, type: "Header", component: <Header /> },
    { id: 2, type: "Hero", component: <Hero /> },
    { id: 3, type: "Categories", component: <Categories /> },
    { id: 4, type: "BenefitsSection", component: <BenefitsSection /> },
    { id: 5, type: "PromotionalCards", component: <PromotionalCards /> },
    { id: 6, type: "FeaturedProducts", component: <FeaturedProducts /> },
    { id: 7, type: "Footer", component: <Footer /> }
  ]);
  
  // Función para añadir un componente al canvas
  const addComponent = (componentName: string) => {
    // Aquí se implementaría la lógica para añadir el componente
    console.log(`Añadiendo componente: ${componentName}`);
    
    // Mostrar feedback visual
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
    notification.textContent = `¡Componente ${componentName} añadido!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };
  
  // Función para exportar el código
  const exportCode = () => {
    const htmlCode = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Sitio Web</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <!-- Componentes generados -->
  ${addedComponents.map(comp => `<!-- ${comp.type} Component -->\n<div class="component">${comp.type} HTML aquí</div>`).join('\n\n')}
</body>
</html>
    `;
    
    // Crear un blob y descargar
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  // Función para copiar un componente
  const copyComponent = (id: number) => {
    const componentToCopy = addedComponents.find(comp => comp.id === id);
    if (componentToCopy) {
      const newComponent = {
        ...componentToCopy,
        id: addedComponents.length + 1
      };
      setAddedComponents([...addedComponents, newComponent]);
      
      // Mostrar feedback
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = `¡Componente ${componentToCopy.type} copiado!`;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Barra de herramientas superior */}
      <header className="bg-white border-b border-gray-200 py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary">My Page Builder</h1>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Undo className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Deshacer</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Redo className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rehacer</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="border border-gray-200 rounded-md p-1 flex">
              <Button 
                variant={activeDevice === 'desktop' ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setActiveDevice('desktop')}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button 
                variant={activeDevice === 'tablet' ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setActiveDevice('tablet')}
              >
                <Tablet className="h-4 w-4" />
              </Button>
              <Button 
                variant={activeDevice === 'mobile' ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setActiveDevice('mobile')}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
              <Eye className="h-4 w-4 mr-2" />
              {showPreview ? "Editar" : "Vista previa"}
            </Button>
            
            <Button variant="outline" onClick={exportCode}>
              <Code className="h-4 w-4 mr-2" />
              Exportar código
            </Button>
            
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Descargar
            </Button>
            
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Guardar
            </Button>
          </div>
        </div>
      </header>
      
      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Panel lateral izquierdo */}
        {!showPreview && (
          <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <Tabs defaultValue="components" className="flex-1 flex flex-col">
              <div className="px-4 py-2 border-b border-gray-200">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="components">Componentes</TabsTrigger>
                  <TabsTrigger value="layers">Capas</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="components" className="flex-1 overflow-hidden flex flex-col">
                <div className="p-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Buscar componentes..." 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
                
                <ScrollArea className="flex-1">
                  <div className="p-4 space-y-6">
                    {componentBlocks.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">{category.category}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {category.items.map((item, i) => (
                            <button
                              key={i}
                              className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-md hover:border-primary hover:bg-primary/5 transition-colors"
                              onClick={() => addComponent(item.name)}
                            >
                              <div className="text-gray-600 mb-1">
                                {item.icon}
                              </div>
                              <span className="text-xs">{item.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="layers" className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="p-4 space-y-1">
                    {addedComponents.map((component, index) => (
                      <div 
                        key={component.id}
                        className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        <div className="flex items-center">
                          <Layers className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{component.type}</span>
                        </div>
                        <div className="flex space-x-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => copyComponent(component.id)}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Settings className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
            
            <div className="p-4 border-t border-gray-200">
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Añadir sección
              </Button>
            </div>
          </div>
        )}
        
        {/* Área de canvas */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div 
            className={`mx-auto bg-white shadow-sm transition-all duration-300 ${
              activeDevice === 'desktop' ? 'max-w-full' : 
              activeDevice === 'tablet' ? 'max-w-[768px]' : 'max-w-[375px]'
            }`}
          >
            {addedComponents.map((component, index) => (
              <div key={component.id} className="relative group">
                {!showPreview && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex space-x-1">
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => copyComponent(component.id)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                {component.component}
              </div>
            ))}
          </div>
        </div>
        
        {/* Panel lateral derecho (solo visible en modo edición) */}
        {!showPreview && (
          <div className="w-64 bg-white border-l border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium">Propiedades</h3>
            </div>
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <div className="p-4">
                <p className="text-sm text-gray-500">Selecciona un elemento para editar sus propiedades.</p>
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
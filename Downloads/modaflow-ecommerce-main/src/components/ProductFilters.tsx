import { useState, useEffect } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { motion, AnimatePresence } from 'framer-motion';

export interface FilterState {
  search: string;
  category: string;
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  isOnSale: boolean;
  isNew: boolean;
  sortBy: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableColors: { name: string; hex: string }[];
  availableSizes: string[];
  priceRange: [number, number];
  isMobile?: boolean;
}

const ProductFilters = ({
  filters,
  onFiltersChange,
  availableColors,
  availableSizes,
  priceRange,
  isMobile = false
}: ProductFiltersProps) => {
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const suggestions = [
    'vestido', 'jeans', 'playera', 'sudadera', 'camisa', 'falda', 'shorts', 'cardigan',
    'negro', 'blanco', 'azul', 'rojo', 'rosa', 'gris'
  ];

  useEffect(() => {
    if (filters.search.length > 0) {
      const filtered = suggestions.filter(s => 
        s.toLowerCase().includes(filters.search.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [filters.search]);

  const updateFilters = (updates: Partial<FilterState>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      category: 'all',
      priceRange: priceRange,
      colors: [],
      sizes: [],
      isOnSale: false,
      isNew: false,
      sortBy: 'relevance'
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.category && filters.category !== 'all') count++;
    if (filters.colors.length > 0) count++;
    if (filters.sizes.length > 0) count++;
    if (filters.isOnSale) count++;
    if (filters.isNew) count++;
    if (filters.priceRange[0] !== priceRange[0] || filters.priceRange[1] !== priceRange[1]) count++;
    return count;
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
            className="pl-10 pr-4 py-3 border-gray-200 focus:border-black focus:ring-black"
          />
        </div>
        
        {/* Search Suggestions */}
        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1"
            >
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                  onClick={() => {
                    updateFilters({ search: suggestion });
                    setShowSuggestions(false);
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sort */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-3 block">
          Ordenar por
        </label>
        <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value })}>
          <SelectTrigger className="border-gray-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevancia</SelectItem>
            <SelectItem value="price-asc">Precio: Menor a mayor</SelectItem>
            <SelectItem value="price-desc">Precio: Mayor a menor</SelectItem>
            <SelectItem value="newest">Más nuevos</SelectItem>
            <SelectItem value="rating">Mejor valorados</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-3 block">
          Categoría
        </label>
        <Select value={filters.category} onValueChange={(value) => updateFilters({ category: value })}>
          <SelectTrigger className="border-gray-200">
            <SelectValue placeholder="Todas las categorías" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="men's clothing">Hombre</SelectItem>
            <SelectItem value="women's clothing">Mujer</SelectItem>
            <SelectItem value="Clothes">Ropa General</SelectItem>
            <SelectItem value="relojes">Relojes</SelectItem>
            <SelectItem value="jewelery">Joyería</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-3 block">
          Rango de precio
        </label>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
            max={priceRange[1]}
            min={priceRange[0]}
            step={50}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Colors */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-gray-900 py-2">
          Colores
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-3">
          <div className="grid grid-cols-4 gap-3">
            {availableColors.map((color) => (
              <button
                key={color.name}
                className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                  filters.colors.includes(color.name)
                    ? 'border-black scale-110'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={() => {
                  const newColors = filters.colors.includes(color.name)
                    ? filters.colors.filter(c => c !== color.name)
                    : [...filters.colors, color.name];
                  updateFilters({ colors: newColors });
                }}
                title={color.name}
              >
                {filters.colors.includes(color.name) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Sizes */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-gray-900 py-2">
          Tallas
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-3">
          <div className="grid grid-cols-4 gap-2">
            {availableSizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-2 text-sm border rounded transition-all ${
                  filters.sizes.includes(size)
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => {
                  const newSizes = filters.sizes.includes(size)
                    ? filters.sizes.filter(s => s !== size)
                    : [...filters.sizes, size];
                  updateFilters({ sizes: newSizes });
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Special Filters */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-900 block">
          Filtros especiales
        </label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="on-sale"
              checked={filters.isOnSale}
              onCheckedChange={(checked) => updateFilters({ isOnSale: !!checked })}
            />
            <label htmlFor="on-sale" className="text-sm text-gray-700">
              En oferta
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="new"
              checked={filters.isNew}
              onCheckedChange={(checked) => updateFilters({ isNew: !!checked })}
            />
            <label htmlFor="new" className="text-sm text-gray-700">
              Novedades
            </label>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {getActiveFiltersCount() > 0 && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Limpiar filtros ({getActiveFiltersCount()})
        </Button>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
            className="pl-10"
          />
        </div>
        
        <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
              {getActiveFiltersCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 min-w-[20px] h-5">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white p-6 border-r border-gray-200 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
        {getActiveFiltersCount() > 0 && (
          <Badge className="bg-red-600 text-white">
            {getActiveFiltersCount()}
          </Badge>
        )}
      </div>
      <FilterContent />
    </div>
  );
};

export default ProductFilters;
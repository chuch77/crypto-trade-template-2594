const CloudBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Fondo de cielo */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 via-blue-100/10 to-transparent"></div>
    </div>
  );
};

export default CloudBackground;
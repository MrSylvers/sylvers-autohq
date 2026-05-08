import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const VehicleContext = createContext();

const DEFAULT_ACCENT = '#d4760a'; // copper default
const DEFAULT_TEXT = '#1a1a1a';

export function VehicleProvider({ children }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [step, setStep] = useState(0);

  const reset = useCallback(() => {
    setSelectedVehicle(null);
    setStep(0);
  }, []);

  const selectManufacturer = useCallback((mfr) => {
    setSelectedVehicle((prev) => ({ ...prev, manufacturer: mfr.name, manufacturerId: mfr.id }));
    setStep(1);
  }, []);

  const selectModel = useCallback((model) => {
    setSelectedVehicle((prev) => ({ ...prev, model }));
    setStep(2);
  }, []);

  const selectYear = useCallback((year) => {
    setSelectedVehicle((prev) => ({ ...prev, year }));
    setStep(3);
  }, []);

  // Derive brand accent color from selected manufacturer
  const brandAccent = useMemo(() => {
    if (!selectedVehicle?.manufacturerId) return DEFAULT_ACCENT;
    // We need access to manufacturers data — will be passed via context
    // Actual color is set via CSS custom property in BrandCarousel
    return DEFAULT_ACCENT;
  }, [selectedVehicle]);

  return (
    <VehicleContext.Provider value={{
      selectedVehicle, step, setStep,
      selectManufacturer, selectModel, selectYear, reset,
      brandAccent,
    }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicle() {
  const ctx = useContext(VehicleContext);
  if (!ctx) throw new Error('useVehicle must be used within VehicleProvider');
  return ctx;
}
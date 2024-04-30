import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ClinicHistoryState } from './clinic-history.entity';

export const useClinicHistoryStore = create(
  persist<ClinicHistoryState>(
    () => ({
      vitals: {
        height: 1.87,
        weight: 75,
        bodyMass: 67.9,
        temperature: 32,
        breathingFrequency: 14,
        bloodPresure: 100,
        hearthRate: 80,
      },
      allergies: {
        medicaments: ['Amoxicilina'],
        others: ['Camarones'],
      },
      pathologicHistory: [
        {
          id: 1,
          title: 'Antecedentes negados',
          value: 'Tuberculosis, Transfusiones',
          check: false,
        },
        {
          id: 2,
          title: 'Hospitalización previa',
          value:
            'Fue hospitalizado por bronquitis en Enero del 2014. Apendicitis en enero del 2017.',
          check: true,
        },
        {
          id: 3,
          title: 'Cirugías previas',
          value: 'Apendicectomia en verano del 2008',
          check: true,
        },
        { id: 4, title: 'Diabetes', value: 'Tipo 2', check: true },
        {
          id: 5,
          title: 'Enfermedades tiroideas',
          value: 'Hipertiroidismo controlado.',
          check: true,
        },
        { id: 6, title: 'Hipertensión arterial', value: 'No', check: true },
        {
          id: 7,
          title: 'Cardiopatias',
          value: 'Presión arterial alta',
          check: true,
        },
        {
          id: 8,
          title: 'Traumatismos',
          value: 'Hematoma en estomago',
          check: true,
        },
        { id: 9, title: 'Cáncer', value: 'Glaucoma', check: true },
        {
          id: 10,
          title: 'Otros',
          value: 'Problemas respiratorios',
          check: true,
        },
      ],
      psychiatricHistory: [
        {
          id: 1,
          title: 'Antecedentes negados',
          value: 'Historia familiar',
          check: false,
        },
      ],
      nutritionalDiet: [
        {
          id: 1,
          title: 'Presencia de hambre - saciedad',
          value: 'Si',
          check: true,
        },
        {
          id: 2,
          title: 'Peso ideal',
          value: '',
          check: false,
        },
        {
          id: 3,
          title: 'Padecimiento actual relacionado al peso',
          value: '',
          check: false,
        },
      ],
      medicaments: [
        'ANTIFLU-DES CAPS 24',
        'TAPAZOL (TIAMAZOL) 5MG',
        'MOTRIN 400MG C/10 (IBUPROFENO)',
      ],
    }),
    {
      name: 'clinic-history-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

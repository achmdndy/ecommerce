import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  locations: z.array(z.string()),
});

export const useLocationFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [locations, setLocations] = useState<{ id: string; label: string }[]>(
    [],
  );

  useEffect(() => {
    setLocations([
      {
        id: 'jabodetabek',
        label: 'Jabodetabek',
      },
      {
        id: 'dki-jakarta',
        label: 'DKI Jakarta',
      },
      {
        id: 'jawa-barat',
        label: 'Jawa Barat',
      },
    ]);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      locations: searchParams.get('locations')
        ? searchParams.get('locations')?.split(',')
        : [],
    },
  });

  const handleCheckboxChange = (
    checked: string | boolean,
    field: ControllerRenderProps<{ locations: string[] }, 'locations'>,
    value: string,
  ) => {
    if (checked) {
      field.onChange([...field.value, value]);
      const newQueryParmas = new URLSearchParams(searchParams.toString());
      newQueryParmas.set('locations', [...field.value, value].toString());
      router.push(`${pathname}?${newQueryParmas}`);
    } else {
      field.onChange(field.value?.filter(v => v !== value));
      const newQueryParmas = new URLSearchParams(searchParams.toString());
      newQueryParmas.set(
        'locations',
        field.value?.filter(v => v !== value).toString(),
      );
      if (field.value?.filter(v => v !== value).length === 0) {
        newQueryParmas.delete('locations');
      }
      router.push(`${pathname}?${newQueryParmas}`);
    }
  };

  return { locations, form, handleCheckboxChange };
};

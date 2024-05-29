import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLocationFilter } from '../_hooks/use-location-filter';

export default function LocationFilter() {
  const { locations, form, handleCheckboxChange } = useLocationFilter();

  return (
    <div className="aurora-border aurora-rounded-lg aurora-p-2 aurora-mt-2">
      <h1 className="aurora-text-sm aurora-font-semibold ">Lokasi</h1>

      <Form {...form}>
        <form className="aurora-mt-2">
          {locations.map(location => (
            <FormField
              key={location.id}
              control={form.control}
              name="locations"
              render={({ field }) => {
                return (
                  <FormItem
                    key={location.id}
                    className="aurora-flex aurora-flex-row aurora-items-center !aurora-space-x-3 !aurora-space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(location.label)}
                        onCheckedChange={checked =>
                          handleCheckboxChange(checked, field, location.label)
                        }
                      />
                    </FormControl>
                    <FormLabel className="aurora-font-normal">
                      {location.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </form>
      </Form>
    </div>
  );
}

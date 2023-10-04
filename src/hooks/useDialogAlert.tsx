import { VariantType, useSnackbar } from "notistack";

interface SnackbarProps {
  message: string;
  variant: VariantType;
}

// enqueueSnackbar('This is a snack success!', { variant: 'success' });
// enqueueSnackbar('This is a snack error!', { variant: 'error' });
// enqueueSnackbar('This is a snack warning!', { variant: 'warning' });
// enqueueSnackbar('This is a snack info!', { variant: 'info' });
// enqueueSnackbar('This is a snack default!', { variant: 'default' });

const useDialogAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbar = (props: SnackbarProps) => {
    const { message, variant } = props;
    enqueueSnackbar(message, { variant } ); 
  };

  return { snackbar };
};

export default useDialogAlert;

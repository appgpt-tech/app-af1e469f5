//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const StudentsTitle = () => {
  const record = useRecordContext();
  return <span>Students {record ? `"${record.Name}"` : ''}</span>;
};

export const StudentsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="Name" />
      <EmailField source="Gmail" />
      <DateField source="DateOfBirth" />
      <NumberField source="Number" />
      <TextField source="Class" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const StudentsEdit = () => (
  <Edit title={<StudentsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Gmail" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateOfBirth" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Number" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Class" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const StudentsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Gmail" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateOfBirth" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Number" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Class" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
];

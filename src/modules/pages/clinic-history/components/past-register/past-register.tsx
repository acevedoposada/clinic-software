import {
  Card,
  CardHeader,
  Body1,
  Divider,
  MessageBar,
  MessageBarBody,
  Tree,
  TreeItem,
  TreeItemLayout,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@fluentui/react-components';
import {
  CheckmarkFilled,
  ChevronRightFilled,
  DismissFilled,
  WarningRegular,
} from '@fluentui/react-icons';
import { Title } from '../title';
import _ from 'lodash';
import { useClinicHistoryStore } from 'store/clinic-history/clinic-history.store';
import { HistoryItem } from 'store/clinic-history/clinic-history.entity';

const TableData = ({ data }: { data: HistoryItem[] }) => {
  return (
    <Table>
      <TableBody>
        {_.map(data, (row) => (
          <TableRow key={row.id}>
            <TableCell>{row.title}</TableCell>
            <TableCell>
              {row.check ? (
                <CheckmarkFilled fontSize={20} className='text-green-500' />
              ) : (
                <DismissFilled fontSize={20} className='text-red-500' />
              )}{' '}
              {row.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const PastRegister = () => {
  const pathologicalHistory = useClinicHistoryStore(
    (state) => state.pathologicHistory
  );
  const psychiatricHistory = useClinicHistoryStore(
    (state) => state.psychiatricHistory
  );
  const nutritionalDiet = useClinicHistoryStore(
    (state) => state.nutritionalDiet
  );
  const allergies = useClinicHistoryStore((state) => state.allergies);

  return (
    <Card>
      <CardHeader
        header={
          <Body1>
            <b>Antecedentes</b>
          </Body1>
        }
      />
      <Divider />
      <div>
        <Title title='Alergias' className='mt-0' />
        <MessageBar
          className='!items-start'
          icon={
            <div className='pt-2'>
              <WarningRegular />
            </div>
          }
          intent='warning'
        >
          <MessageBarBody className='py-1'>
            <Tree className='-ml-4'>
              <TreeItem itemType='branch' open>
                <TreeItemLayout
                  expandIcon={<div />}
                  className='hover:!bg-transparent'
                >
                  Alergias a medicamentos:
                </TreeItemLayout>
                <Tree>
                  {_.map(allergies.medicaments, (allergie, idx) => (
                    <TreeItem key={idx} itemType='leaf'>
                      <TreeItemLayout
                        iconBefore={<ChevronRightFilled />}
                        className='hover:!bg-transparent'
                      >
                        {allergie}
                      </TreeItemLayout>
                    </TreeItem>
                  ))}
                </Tree>
              </TreeItem>
              <TreeItem itemType='branch' open>
                <TreeItemLayout
                  expandIcon={<div />}
                  className='hover:!bg-transparent'
                >
                  Otras alergias:
                </TreeItemLayout>
                <Tree>
                  {_.map(allergies.others, (allergie, idx) => (
                    <TreeItem key={idx} itemType='leaf'>
                      <TreeItemLayout
                        iconBefore={<ChevronRightFilled />}
                        className='hover:!bg-transparent'
                      >
                        {allergie}
                      </TreeItemLayout>
                    </TreeItem>
                  ))}
                </Tree>
              </TreeItem>
            </Tree>
          </MessageBarBody>
        </MessageBar>
        <Title title='Antecedentes Patólogicos' />
        <TableData data={pathologicalHistory} />
        <Title title='Antecedentes Psiquiátricos' />
        <TableData data={psychiatricHistory} />
        <Title title='Dieta nutriológica' />
        <TableData data={nutritionalDiet} />
      </div>
    </Card>
  );
};

export default PastRegister;

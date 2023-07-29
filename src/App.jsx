import { Button, Table, Modal, Input, Form, DatePicker, } from 'antd'
import './App.css'
import { useState } from 'react'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import PropTypes from 'prop-types';

const CreateForm = ({ open, onCreate, onCancel, onChange}) => {
  const [form] = Form.useForm();
  // const onChange = (date, dateString) => {
  //   console.log('date=', date, 'dateString=', dateString);
  // };
  return (
    <Modal
      open={open}
      title='Create new Student'
      okText='Create'
      onCancel={onCancel}
      onOk={() => {
        form
        .validateFields()
        .then((values) => {
          form.resetFields();
          onCreate(values)
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите имя!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="DatePicker"
          name="date"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите дату!',
            },
          ]}
        >
          <DatePicker
            onChange={onChange}
            format="DD.MM.YYYY"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

CreateForm.propTypes = {
  open: PropTypes.bool,
  onCreate: PropTypes.func,
  onCancel: PropTypes.func,
  valueKey: PropTypes.number
}

function App() {

  const [isEditing, setIsEditing] = useState(false)
  const [editingEntry, setEditingEntry] = useState(null)
  const [dateString, setDateString] = useState(null)
  const [dataSource, setDataSource] = useState([
    {
      key:1,
      name: 'Semen',
      date: '17.03.2023',
    },
    {
      key:2,
      name: 'Andrey',
      date: '18.03.2023',
    },
    {
      key:3,
      name: 'Petr',
      date: '19.03.2023',
    },
    {
      key:4,
      name: 'Ivan',
      date: '20.03.2023',
    }
  ])

  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    const randomNumber = parseInt(Math.random()*1000)
    setDataSource(pre => {
      const element = {key: randomNumber, name: values.name, date: dateString}
      return [...pre, element]
    })
    setOpen(false);
  };

  const onChange = (date, dateString) => {
    setDateString(dateString)
    return dateString
  };
  
  const columns = [
    {
      title: 'Номер',
      dataIndex: 'key',
      key: 'key',
      sorter: (a, b) => a.key - b.key,
      render: (key, record, index) => { ++index; return index; },
      showSorterTooltip: false,
    },
    {
      key: '2',
      title: 'Имя',
      dataIndex: 'name'
    },
    {
      key: '3',
      title: 'Дата',
      dataIndex: 'date'
    },
    {
      key: '4',
      title: 'Действия',
      render: (record) => {
        return <>
          <EditOutlined onClick={() => {
            onEditItem(record)
          }} />
          <DeleteOutlined onClick={() => {
            onDeleteItem(record)
          }} style={{color: 'red', marginLeft: 12}}/>
        </>
      }
    }, 
  ]
  
  const onDeleteItem = (record) => {
    Modal.confirm({
      title: 'Вы уверены, что хотите удалить эту запись?',
      okText: 'Да',
      okType: 'danger',
      onOk: () => {
        setDataSource(pre => {
          return pre.filter(item => item.key !== record.key)
        })
      }
    })
  }

  const onEditItem = (record) => {
    setIsEditing(true);
    setEditingEntry({...record})
  }


  const resetEditing = () => {
    setIsEditing(false);
    setEditingEntry(null)
  }

  return (
    <>
      <div>
        <Button className='btn'
          type="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Добавить запись
        </Button>
        <Table
          columns={columns}
          dataSource={dataSource}
        ></Table>
        <CreateForm 
          open={open}
          onCreate={onCreate}
          onCancel={() => {
            setOpen(false);
          }}
          onChange={onChange}
        />
        <Modal
          title = 'Редактирование записи'
          open = {isEditing}
          okText = 'Сохранить'
          onCancel = {() => {
            resetEditing()
          }}
          onOk={() => {
            setDataSource(pre => {
              console.log('dataSource', dataSource);
              return pre.map(item => {
                if (item.key === editingEntry.key) {
                  return editingEntry
                } else {
                  return item
                }
              }) 
            })
            resetEditing()
          }}
        >
          <Input type='number' value={editingEntry?.key} onChange={(e) => {
            setEditingEntry(pre => {
              return {...pre, key: e.target.value}
            })
          }} />
          <Input value={editingEntry?.name} onChange={(e) => {
            setEditingEntry(pre => {
              return {...pre, name: e.target.value}
            })
          }} />
          <Input value={editingEntry?.date} onChange={(e) => {
            setEditingEntry(pre => {
              return {...pre, date: e.target.value}
            })
          }}/>
        </Modal>
      </div>
    </>
  )
}

export default App

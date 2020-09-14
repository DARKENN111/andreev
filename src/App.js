import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    Avatar,
    Button,
    Div,
    FormLayout,
    Group,
    Header,
    Input,
    Panel,
    PanelHeader,
    PanelHeaderContent,
    Text,
    View
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        bridge.send('VKWebAppGetUserInfo', {})
            .then((user) => {
                this.setState({ user });
            });
    }

    getImage = async () => {
        const image = document.getElementById('url').value;

        var xhr = new XMLHttpRequest();
        var json_obj, status = false;
        xhr.open("GET", image, true);
        xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          this.setState({ json_obj });
          alert({ json_obj });
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);

        console.log({image});
    };

    render() {
        const { user, image } = this.state;

        return (
            <View activePanel="main">
                <Panel id="main">
                    <PanelHeader>
                        {
                            user ?
                                <PanelHeaderContent
                                    status="VK Apps Image Example"
                                    before={ <Avatar size={ 36 } src={ user.photo_100 } /> }
                                >
                                    { user.first_name }
                                </PanelHeaderContent>
                                :
                                'VK Apps Image Example'
                        }
                    </PanelHeader>

                    <Group header={ <Header mode="secondary">Задание</Header> }>
                        <Div>
                            ууууУ нас есть мини-приложение, которое имеет возможность загружать изображения по внешней ссылке. Увы, в приложении допущена ошибка, из-за чего удаленный сервер получает параметры запуска пользователей, которые вставляют ссылку. Нужно объяснить почему так происходит и исправить ситуацию красиво и лаконично.
                        </Div>
                        <Div>
                            Для облегчения тестирования можно использовать картинку <Text weight="semibold">https://service.pavel.im/image</Text> (good code — все круто, bad code — сервер получил параметры запуска)
                        </Div>

                        <FormLayout>
                            <Input type="text" id="url" />

                            <Button size="xl" onClick={ this.getImage }>Загрузить</Button>
                        </FormLayout>

                        {
                            !!image &&
                            <Div style={{ textAlign: 'center' }}>
                                <img src={ image } alt="remote file" />
                            </Div>
                        }
                    </Group>
                </Panel>
            </View>
        );
    }

}

export default App;

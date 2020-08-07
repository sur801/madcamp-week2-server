const { config, Group } = require('solapi')

// 인증을 위해 발급받은 본인의 API Key를 사용합니다.
const apiKey = 'NCSOG6SIKMSV5OSF'
const apiSecret = 'UNRSOXZ4NVYJKWXNPZV7HIQXA6793B9A'
config.init({ apiKey, apiSecret })
async function send (params = {}) {
  try {
    const response = await Group.sendSimpleMessage(params)
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

const params = {
  text: '[솔라피 테스트] hello world!', // 문자 내용
  type: 'SMS', // 발송할 메시지 타입 (SMS, LMS, MMS, ATA, CTA)
  to: '01055132946', // 수신번호 (받는이)
  from: '01072027518' // 발신번호 (보내는이)
}
send(params)
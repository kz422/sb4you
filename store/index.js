export const state = () => ({
  drinks: [
    {name: '濃厚バニラクリームフラペチーノ',subtitle: 'frappucino', image: require("@/assets/frap2.png"), total: 'カスタム小計 +50円',
    orders: ['バニラクリームフラペチーノ', 'ブラべミルクに変更', 'キャラメルソースを追加']},
    {name: 'ゴディバフラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap21.png"), total: 'カスタム小計 +100円',
    orders: ['バニラクリームフラペチーノ', 'モカシロップに変更', 'アーモンドトフィーシロップ追加', 'チョコレートソース追加', 'チョコレートチップ追加', 'エクストラパウダー']},
    {name: '夢フラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap12.png"), total: 'カスタム小計 +50円',
    orders: ['バニラクリームフラペチーノ', 'エスプレッソショット追加']}, 
    {name: 'スイーツ抹茶クリームフラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap19.png"),
    orders: ['抹茶クリームフラペチーノ', 'ホワイトモカシロップに変更', 'キャラメルソースを追加', 'エクストラホイップ', 'エクストラパウダー']},
    {name: '杏仁フラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap11.png"),
    orders: ['バニラクリームフラペチーノ', 'アーモンドトフィーシロップに変更']},
    {name: 'チャイクリームフラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap14.png"),
    orders: ['バニラクリームフラペチーノ', 'チャイシロップに変更', '自分でシナモンパウダーをかける']},
    {name: 'エスプレッソフラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap15.png"), total: 'カスタム小計 +50円',
    orders: ['コーヒーフラペチーノ', 'エスプレッソショットの追加']},
    {name: '白桃フラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap10.png"), total: 'カスタム小計 +100円',
    orders: ['マンゴーパッションフラペチーノ', 'パッションティー抜き', 'ホワイトモカシロップ追加', 'ホイップクリーム追加']},
    {name: 'トロピカルフラペチーノ', subtitle: 'frappucino', image: require("@/assets/frap20.png"), total: 'カスタム小計 +100円',
    orders: ['バニラクリームフラペチーノ', 'シトラス果肉追加']},
    {name: 'ホワイトチョコレート', subtitle: 'frappucino', image: require("@/assets/frap3.png"), total: 'カスタム小計 +100円',
    orders: ['スチームミルク', 'ホワイトモカシロップを追加', 'ホイップクリームを追加']},
    {name: 'スイートチョコレートモカ', subtitle: 'others', image: require("@/assets/frap5.png"), total: 'カスタム小計 +50円', orders: ['ホワイトモカを注文', 'ブラベミルクに変更', 'チョコレートソース追加']},
    {name: 'ブラックココア', subtitle: 'others', image: require("@/assets/frap4.png"), total: 'カスタム小計 +50円',
    orders: ['ココア', 'エスプレッソショット追加']},
    {name: 'ビターティーチャイ', subtitle: 'others', image: require("@/assets/frap9.png"), total: 'カスタム小計 +50円',
    orders: ['チャイティーラテ', 'エスプレッソショットを追加']},
    {name: 'ブラべホワイトモカ', subtitle: 'others', image: require("@/assets/frap5.png"), total: 'カスタム小計 +50円',
    orders: ['ホワイトモカ', 'ブラべミルクに変更', 'チョコレートソース追加']},
    {name: 'パンダマキアート', subtitle: 'others', image: require("@/assets/frap6.png"), total: 'カスタム小計 +50円',
    orders: ['キャラメルマキアート', 'ホワイトモカシロップに変更', 'チョコレートシロップを追加', 'チョコレートソースに変更']},
    {name: 'ゼブラマキアート', subtitle: 'others', image: require("@/assets/frap7.png"),
    orders: ['キャラメルマキアート', 'ホワイトモカシロップに変更', 'チョコソースに変更']},
    {name: 'パッションゆずシトラスティー', subtitle: 'frappucino', image: require("@/assets/frap16.png"),
    orders: ['ゆずシトラスティー', '茶葉をユースベリーティーに変更']},
    {name: 'ホワイトモカアイスティー', subtitle: 'others', image: require("@/assets/frap17.png"), total: 'カスタム小計 +50円',
    orders: ['アイスティー', 'ホワイトモカシロップ追加']},
    {name: '濃厚キャラメルマキアート', subtitle: 'others', image: require("@/assets/frap8.png"),
    orders: ['キャラメルマキアート', 'キャラメルシロップに変更', 'キャラメルソース多め']},
    {name: 'ヘルシーキャラメルマキアート', subtitle: 'others', image: require("@/assets/frap18.png"), total: 'カスタム小計 +50円',
    orders: ['キャラメルマキアート', 'ソイミルクに変更', 'ディカフェに変更']},
  ]
})

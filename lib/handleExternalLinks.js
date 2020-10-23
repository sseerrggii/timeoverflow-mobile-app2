import * as WebBrowser from 'expo-web-browser';

export default function(webview, url) {
  if (!/timeoverflow/.test(url)) {
    webview.goBack();
    WebBrowser.openBrowserAsync(url);
  }
}
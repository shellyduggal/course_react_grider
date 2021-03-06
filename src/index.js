import React, {Component} from 'react'; //don't need a path because it's a node module, not a file we wrote
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar'; //needs a relative path because we wrote this file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyB0MKp6pNljLpWul51jKt8hX8rUShzmwYk';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos:[],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch(
			{key: API_KEY, term: term}, 
			(videos) => {
				this.setState({
					videos:videos,
					selectedVideo: videos[0]
				});
			}
		);
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); //can only trigger a new search every 300ms

		return (
			<div>
				<SearchBar 
					onSearchTermChange ={term => this.videoSearch(term)}
				/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} 
				/>
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));
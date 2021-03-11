import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

export const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = event => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}

			handler(event);
		};

		document.addEventListener('mousedown', listener);
		
		return () => {
			document.removeEventListener('mousedown', listener);
		};
	},
	[ref, handler],
	);
};

function useDocumentScrollThrottled(callback) {
	const [, setScrollPosition] = useState(0);
	let previousScrollTop = 0;

	function handleDocumentScroll() {
		const { scrollTop: currentScrollTop } = document.documentElement || document.body;

		setScrollPosition(previousPosition => {
			previousScrollTop = previousPosition;
			return currentScrollTop;
		});

		callback({ previousScrollTop, currentScrollTop , });
	};

	const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

	useEffect(() => {
		window.addEventListener('scroll', handleDocumentScrollThrottled);

		return () => 
			window.removeEventListener('scroll', handleDocumentScrollThrottled);
	}, []);
};

export default useDocumentScrollThrottled;
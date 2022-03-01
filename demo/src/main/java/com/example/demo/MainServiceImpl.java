package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	private MainMapper mapper;
	
	public void boardInsert(MainVO mainVO) throws Exception{
		mapper.boardInsert(mainVO);
	}
	
	public List<MainVO> boardSelect() throws Exception{
		return mapper.boardSelect();
	}

	public void boardDelete(MainVO mainVO)throws Exception{
		mapper.boardDelete(mainVO);
	}
}

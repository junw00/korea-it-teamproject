package com.team4.teamproject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Area {
	private int area_id;
	private String area_name_kr;
	private String area_name_en;
	private String image_url;
	private String contents;
	

}

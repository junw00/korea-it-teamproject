package com.team4.teamproject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Lodging {
	private int lodging_id;
	private String lodging_name_kr;
	private String lodging_name_en;
	private String address;
	private String tel_number;
	private String image_url;
	private String content;
	private int lodging_area_id;

}
